# XXX: "bad example" files must still pass lint?
linted_reach_src_dirs = \
	examples/ \
	hs/rsh/ \
	hs/test-examples/

# XXX: no way for linter to allow rebinding _ ?
# TODO: clear out old subdirs
ignored_reach_sources = \
	--ignore-pattern hs/test-examples/non-features/js_parse_err.rsh \
	--ignore-pattern hs/test-examples/features/underscore.rsh \
	--ignore-pattern hs/test-examples/nl-eval-errors/ \
	--ignore-pattern hs/test-examples/parse-errors/ \
	--ignore-pattern hs/test-examples/compile-errors/

.PHONY: all
all: check run-all

.PHONY: check
check:
	@find hs -name '*.hs' | xargs wc
	@ag --color --ignore ./Makefile --ignore docs-src/Makefile --ignore svg/todo.svg --ignore README.md --ignore-dir docs --ignore 'package-lock.json' --ignore '*.dead' '(xxx|todo|fixme)'

.PHONY: todo
todo:
	@$(MAKE) check | aha --black > todo.html

.PHONY: run-all
run-all:
	cd js && $(MAKE) run
	cd examples && $(MAKE) run-all

.PHONY: build-all
build-all:
	cd hs && $(MAKE) build build-circle-docker
	cd scripts/ethereum-devnet && $(MAKE) build
	cd js && $(MAKE) build
	cd examples && $(MAKE) clean-all build-all

.PHONY: push-all
push-all:
	cd hs && $(MAKE) push push-circle-docker
	cd scripts/ethereum-devnet && $(MAKE) push
	cd js && $(MAKE) push

.PHONY: publish-all
publish-all:
	cd js && $(MAKE) publish

.PHONY: rebuild-and-run-all-examples
rebuild-and-run-all-examples:
	cd examples && time $(MAKE) clean-all build-all run-all

.PHONY: rbe
rbe: rebuild-and-run-all-examples

.PHONY: docs
docs:
	cd docs-src && $(MAKE)

.PHONY: reach-lint
reach-lint:
	@(set -e; for dir in $(linted_reach_src_dirs); do \
		echo linting $$dir; \
		./reach lint $$dir $(ignored_reach_sources); \
	done)

.PHONY: reach-lint-fix
reach-lint-fix:
	(set -e; for dir in $(linted_reach_src_dirs); do \
		echo fixing $$dir; \
		./reach lint --fix $$dir $(ignored_reach_sources); \
	done)

.PHONY: sh-lint
sh-lint:
	@(set -e; for f in $$(find . -not \( -path '*/node_modules/*' -prune \) -name '*.sh') ./reach; do \
		echo linting $$f; \
		shellcheck $$f ; \
	done)