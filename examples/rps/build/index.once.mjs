// Automatically generated with Reach 0.1.0

export async function A(stdlib, ctc, interact) {
  const txn0 = { balance: 0, value: 0 };
  const v2 = stdlib.protect(stdlib.T_Tuple([stdlib.T_UInt256, stdlib.T_UInt256]), await interact.getParams());
  const v3 = v2[0];
  const v4 = v2[1];
  
  const v8 = stdlib.add(v3, v4);
  
  const txn1 = await ctc.sendrecv('A', 1, 2, [v3, v4], v8, false, null);
  const [v5, v6] = txn1.data;
  const v7 = txn1.from;
  const v9 = stdlib.add(v5, v6);
  const v10 = txn1.value;
  const v12 = stdlib.eq(v9, v10);
  stdlib.assert(v12);
  const txn2 = await ctc.recv('A', 2, 0, 10);
  if (txn2.didTimeout) {
    
    const txn3 = await ctc.sendrecv('A', 9, 0, [v7, v5, v6], 0, false, null);
    const [] = txn3.data;
    const v22 = txn3.value;
    const v24 = stdlib.eq(0, v22);
    stdlib.assert(v24);
    stdlib.assert(true);
    stdlib.protect(stdlib.T_Null, await interact.endsWith('Bob quits'));
    
    return; }
  else {
    const [] = txn2.data;
    const v16 = txn2.from;
    const v17 = txn2.value;
    const v19 = stdlib.eq(v5, v17);
    stdlib.assert(v19);
    stdlib.protect(stdlib.T_Null, await interact.partnerIs(v16));
    
    let v50;
    const v51 = stdlib.protect(stdlib.T_Bytes, await interact.getHand());
    const v53 = stdlib.bytes_eq(v51, 'ROCK');
    const v55 = stdlib.bytes_eq(v51, 'PAPER');
    const v57 = stdlib.bytes_eq(v51, 'SCISSORS');
    const v59 = v53 ? true : v55;
    const v61 = v59 ? true : v57;
    stdlib.assert(v61);
    if (v53) {
      v50 = 0;
       }
    else {
      if (v55) {
        v50 = 1;
         }
      else {
        v50 = 2;
         }
       }
    const v69 = stdlib.protect(stdlib.T_UInt256, await interact.random());
    const v70 = stdlib.keccak256(v69, v50);
    stdlib.protect(stdlib.T_Null, await interact.commits());
    
    
    const txn3 = await ctc.sendrecv('A', 3, 1, [v7, v5, v6, v16, v70], 0, 10, null);
    if (txn3.didTimeout) {
      const txn4 = await ctc.recv('A', 8, 0, false);
      const [] = txn4.data;
      const v78 = txn4.value;
      const v80 = stdlib.eq(0, v78);
      stdlib.assert(v80);
      stdlib.assert(true);
      stdlib.protect(stdlib.T_Null, await interact.endsWith('Alice quits'));
      
      return; }
    else {
      const [v72] = txn3.data;
      const v73 = txn3.value;
      const v75 = stdlib.eq(0, v73);
      stdlib.assert(v75);
      const txn4 = await ctc.recv('A', 4, 1, 10);
      if (txn4.didTimeout) {
        
        const txn5 = await ctc.sendrecv('A', 7, 0, [v7, v5, v6, v16, v72], 0, false, null);
        const [] = txn5.data;
        const v128 = txn5.value;
        const v130 = stdlib.eq(0, v128);
        stdlib.assert(v130);
        stdlib.assert(true);
        stdlib.protect(stdlib.T_Null, await interact.endsWith('Bob quits'));
        
        return; }
      else {
        const [v122] = txn4.data;
        const v123 = txn4.value;
        const v125 = stdlib.eq(0, v123);
        stdlib.assert(v125);
        const v152 = stdlib.le(0, v122);
        const v153 = stdlib.lt(v122, 3);
        const v155 = v152 ? v153 : false;
        stdlib.assert(v155);
        let v157;
        const v159 = stdlib.le(0, v122);
        const v160 = stdlib.lt(v122, 3);
        const v162 = v159 ? v160 : false;
        stdlib.assert(v162);
        const v164 = stdlib.eq(v122, 0);
        if (v164) {
          v157 = 'ROCK';
           }
        else {
          const v166 = stdlib.eq(v122, 1);
          if (v166) {
            v157 = 'PAPER';
             }
          else {
            v157 = 'SCISSORS';
             }
           }
        stdlib.protect(stdlib.T_Null, await interact.reveals(v157));
        
        
        const txn5 = await ctc.sendrecv('A', 5, 2, [v7, v5, v6, v16, v72, v122, v69, v50], 0, 10, null);
        if (txn5.didTimeout) {
          const txn6 = await ctc.recv('A', 6, 0, false);
          const [] = txn6.data;
          const v175 = txn6.value;
          const v177 = stdlib.eq(0, v175);
          stdlib.assert(v177);
          stdlib.assert(true);
          stdlib.protect(stdlib.T_Null, await interact.endsWith('Alice quits'));
          
          return; }
        else {
          const [v168, v169] = txn5.data;
          const v170 = txn5.value;
          const v172 = stdlib.eq(0, v170);
          stdlib.assert(v172);
          const v199 = stdlib.keccak256(v168, v169);
          const v201 = stdlib.eq(v72, v199);
          stdlib.assert(v201);
          const v203 = stdlib.le(0, v169);
          const v204 = stdlib.lt(v169, 3);
          const v206 = v203 ? v204 : false;
          stdlib.assert(v206);
          let v208;
          const v210 = stdlib.le(0, v169);
          const v211 = stdlib.lt(v169, 3);
          const v213 = v210 ? v211 : false;
          const v215 = stdlib.le(0, v122);
          const v216 = stdlib.lt(v122, 3);
          const v218 = v215 ? v216 : false;
          const v220 = v213 ? v218 : false;
          if (v220) {
            const v221 = stdlib.sub(4, v122);
            const v222 = stdlib.add(v169, v221);
            const v223 = stdlib.mod(v222, 3);
            v208 = v223;
             }
          else {
            if (v213) {
              v208 = 2;
               }
            else {
              if (v218) {
                v208 = 0;
                 }
              else {
                v208 = 1;
                 }
               }
             }
          let v292;
          const v294 = stdlib.eq(v208, 2);
          if (v294) {
            const v295 = stdlib.mul(2, v5);
            v292 = [v295, 0];
             }
          else {
            const v297 = stdlib.eq(v208, 0);
            if (v297) {
              const v298 = stdlib.mul(2, v5);
              v292 = [0, v298];
               }
            else {
              v292 = [v5, v5];
               }
             }
          let v305;
          const v307 = stdlib.le(0, v208);
          const v308 = stdlib.lt(v208, 5);
          const v310 = v307 ? v308 : false;
          stdlib.assert(v310);
          const v312 = stdlib.eq(v208, 0);
          if (v312) {
            v305 = 'Bob wins';
             }
          else {
            const v314 = stdlib.eq(v208, 1);
            if (v314) {
              v305 = 'Draw';
               }
            else {
              const v316 = stdlib.eq(v208, 2);
              if (v316) {
                v305 = 'Alice wins';
                 }
              else {
                const v318 = stdlib.eq(v208, 3);
                if (v318) {
                  v305 = 'Alice quits';
                   }
                else {
                  v305 = 'Bob quits';
                   }
                 }
               }
             }
          stdlib.protect(stdlib.T_Null, await interact.endsWith(v305));
          
          return; } } } } }
export async function B(stdlib, ctc, interact) {
  const txn0 = { balance: 0, value: 0 };
  const txn1 = await ctc.recv('B', 1, 2, false);
  const [v5, v6] = txn1.data;
  const v7 = txn1.from;
  const v9 = stdlib.add(v5, v6);
  const v10 = txn1.value;
  const v12 = stdlib.eq(v9, v10);
  stdlib.assert(v12);
  stdlib.protect(stdlib.T_Null, await interact.partnerIs(v7));
  stdlib.protect(stdlib.T_Null, await interact.acceptParams(v5, v6));
  
  
  const txn2 = await ctc.sendrecv('B', 2, 0, [v7, v5, v6], v5, 10, null);
  if (txn2.didTimeout) {
    const txn3 = await ctc.recv('B', 9, 0, false);
    const [] = txn3.data;
    const v22 = txn3.value;
    const v24 = stdlib.eq(0, v22);
    stdlib.assert(v24);
    stdlib.assert(true);
    stdlib.protect(stdlib.T_Null, await interact.endsWith('Bob quits'));
    
    return; }
  else {
    const [] = txn2.data;
    const v16 = txn2.from;
    const v17 = txn2.value;
    const v19 = stdlib.eq(v5, v17);
    stdlib.assert(v19);
    const txn3 = await ctc.recv('B', 3, 1, 10);
    if (txn3.didTimeout) {
      
      const txn4 = await ctc.sendrecv('B', 8, 0, [v7, v5, v6, v16], 0, false, null);
      const [] = txn4.data;
      const v78 = txn4.value;
      const v80 = stdlib.eq(0, v78);
      stdlib.assert(v80);
      stdlib.assert(true);
      stdlib.protect(stdlib.T_Null, await interact.endsWith('Alice quits'));
      
      return; }
    else {
      const [v72] = txn3.data;
      const v73 = txn3.value;
      const v75 = stdlib.eq(0, v73);
      stdlib.assert(v75);
      let v103;
      const v104 = stdlib.protect(stdlib.T_Bytes, await interact.getHand());
      const v106 = stdlib.bytes_eq(v104, 'ROCK');
      const v108 = stdlib.bytes_eq(v104, 'PAPER');
      const v110 = stdlib.bytes_eq(v104, 'SCISSORS');
      const v112 = v106 ? true : v108;
      const v114 = v112 ? true : v110;
      stdlib.assert(v114);
      if (v106) {
        v103 = 0;
         }
      else {
        if (v108) {
          v103 = 1;
           }
        else {
          v103 = 2;
           }
         }
      stdlib.protect(stdlib.T_Null, await interact.shows());
      
      
      const txn4 = await ctc.sendrecv('B', 4, 1, [v7, v5, v6, v16, v72, v103], 0, 10, null);
      if (txn4.didTimeout) {
        const txn5 = await ctc.recv('B', 7, 0, false);
        const [] = txn5.data;
        const v128 = txn5.value;
        const v130 = stdlib.eq(0, v128);
        stdlib.assert(v130);
        stdlib.assert(true);
        stdlib.protect(stdlib.T_Null, await interact.endsWith('Bob quits'));
        
        return; }
      else {
        const [v122] = txn4.data;
        const v123 = txn4.value;
        const v125 = stdlib.eq(0, v123);
        stdlib.assert(v125);
        const v152 = stdlib.le(0, v122);
        const v153 = stdlib.lt(v122, 3);
        const v155 = v152 ? v153 : false;
        stdlib.assert(v155);
        const txn5 = await ctc.recv('B', 5, 2, 10);
        if (txn5.didTimeout) {
          
          const txn6 = await ctc.sendrecv('B', 6, 0, [v7, v5, v6, v16, v72, v122], 0, false, null);
          const [] = txn6.data;
          const v175 = txn6.value;
          const v177 = stdlib.eq(0, v175);
          stdlib.assert(v177);
          stdlib.assert(true);
          stdlib.protect(stdlib.T_Null, await interact.endsWith('Alice quits'));
          
          return; }
        else {
          const [v168, v169] = txn5.data;
          const v170 = txn5.value;
          const v172 = stdlib.eq(0, v170);
          stdlib.assert(v172);
          const v199 = stdlib.keccak256(v168, v169);
          const v201 = stdlib.eq(v72, v199);
          stdlib.assert(v201);
          const v203 = stdlib.le(0, v169);
          const v204 = stdlib.lt(v169, 3);
          const v206 = v203 ? v204 : false;
          stdlib.assert(v206);
          let v208;
          const v210 = stdlib.le(0, v169);
          const v211 = stdlib.lt(v169, 3);
          const v213 = v210 ? v211 : false;
          const v215 = stdlib.le(0, v122);
          const v216 = stdlib.lt(v122, 3);
          const v218 = v215 ? v216 : false;
          const v220 = v213 ? v218 : false;
          if (v220) {
            const v221 = stdlib.sub(4, v122);
            const v222 = stdlib.add(v169, v221);
            const v223 = stdlib.mod(v222, 3);
            v208 = v223;
             }
          else {
            if (v213) {
              v208 = 2;
               }
            else {
              if (v218) {
                v208 = 0;
                 }
              else {
                v208 = 1;
                 }
               }
             }
          let v292;
          const v294 = stdlib.eq(v208, 2);
          if (v294) {
            const v295 = stdlib.mul(2, v5);
            v292 = [v295, 0];
             }
          else {
            const v297 = stdlib.eq(v208, 0);
            if (v297) {
              const v298 = stdlib.mul(2, v5);
              v292 = [0, v298];
               }
            else {
              v292 = [v5, v5];
               }
             }
          let v321;
          const v323 = stdlib.le(0, v208);
          const v324 = stdlib.lt(v208, 5);
          const v326 = v323 ? v324 : false;
          stdlib.assert(v326);
          const v328 = stdlib.eq(v208, 0);
          if (v328) {
            v321 = 'Bob wins';
             }
          else {
            const v330 = stdlib.eq(v208, 1);
            if (v330) {
              v321 = 'Draw';
               }
            else {
              const v332 = stdlib.eq(v208, 2);
              if (v332) {
                v321 = 'Alice wins';
                 }
              else {
                const v334 = stdlib.eq(v208, 3);
                if (v334) {
                  v321 = 'Alice quits';
                   }
                else {
                  v321 = 'Bob quits';
                   }
                 }
               }
             }
          stdlib.protect(stdlib.T_Null, await interact.endsWith(v321));
          
          return; } } } } }
export async function O(stdlib, ctc, interact) {
  const txn0 = { balance: 0, value: 0 };
  const txn1 = await ctc.recv('O', 1, 2, false);
  const [v5, v6] = txn1.data;
  const v7 = txn1.from;
  const v9 = stdlib.add(v5, v6);
  const v10 = txn1.value;
  const v12 = stdlib.eq(v9, v10);
  stdlib.assert(v12);
  const txn2 = await ctc.recv('O', 2, 0, 10);
  if (txn2.didTimeout) {
    const txn3 = await ctc.recv('O', 9, 0, false);
    const [] = txn3.data;
    const v22 = txn3.value;
    const v24 = stdlib.eq(0, v22);
    stdlib.assert(v24);
    return; }
  else {
    const [] = txn2.data;
    const v16 = txn2.from;
    const v17 = txn2.value;
    const v19 = stdlib.eq(v5, v17);
    stdlib.assert(v19);
    const txn3 = await ctc.recv('O', 3, 1, 10);
    if (txn3.didTimeout) {
      const txn4 = await ctc.recv('O', 8, 0, false);
      const [] = txn4.data;
      const v78 = txn4.value;
      const v80 = stdlib.eq(0, v78);
      stdlib.assert(v80);
      return; }
    else {
      const [v72] = txn3.data;
      const v73 = txn3.value;
      const v75 = stdlib.eq(0, v73);
      stdlib.assert(v75);
      const txn4 = await ctc.recv('O', 4, 1, 10);
      if (txn4.didTimeout) {
        const txn5 = await ctc.recv('O', 7, 0, false);
        const [] = txn5.data;
        const v128 = txn5.value;
        const v130 = stdlib.eq(0, v128);
        stdlib.assert(v130);
        return; }
      else {
        const [v122] = txn4.data;
        const v123 = txn4.value;
        const v125 = stdlib.eq(0, v123);
        stdlib.assert(v125);
        const v152 = stdlib.le(0, v122);
        const v153 = stdlib.lt(v122, 3);
        const v155 = v152 ? v153 : false;
        stdlib.assert(v155);
        const txn5 = await ctc.recv('O', 5, 2, 10);
        if (txn5.didTimeout) {
          const txn6 = await ctc.recv('O', 6, 0, false);
          const [] = txn6.data;
          const v175 = txn6.value;
          const v177 = stdlib.eq(0, v175);
          stdlib.assert(v177);
          return; }
        else {
          const [v168, v169] = txn5.data;
          const v170 = txn5.value;
          const v172 = stdlib.eq(0, v170);
          stdlib.assert(v172);
          const v199 = stdlib.keccak256(v168, v169);
          const v201 = stdlib.eq(v72, v199);
          stdlib.assert(v201);
          const v203 = stdlib.le(0, v169);
          const v204 = stdlib.lt(v169, 3);
          const v206 = v203 ? v204 : false;
          stdlib.assert(v206);
          let v208;
          const v210 = stdlib.le(0, v169);
          const v211 = stdlib.lt(v169, 3);
          const v213 = v210 ? v211 : false;
          const v215 = stdlib.le(0, v122);
          const v216 = stdlib.lt(v122, 3);
          const v218 = v215 ? v216 : false;
          const v220 = v213 ? v218 : false;
          if (v220) {
            const v221 = stdlib.sub(4, v122);
            const v222 = stdlib.add(v169, v221);
            const v223 = stdlib.mod(v222, 3);
            v208 = v223;
             }
          else {
            if (v213) {
              v208 = 2;
               }
            else {
              if (v218) {
                v208 = 0;
                 }
              else {
                v208 = 1;
                 }
               }
             }
          let v292;
          const v294 = stdlib.eq(v208, 2);
          if (v294) {
            const v295 = stdlib.mul(2, v5);
            v292 = [v295, 0];
             }
          else {
            const v297 = stdlib.eq(v208, 0);
            if (v297) {
              const v298 = stdlib.mul(2, v5);
              v292 = [0, v298];
               }
            else {
              v292 = [v5, v5];
               }
             }
          return; } } } } }

const _ETH = {
  ABI: `[
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        }
      ],
      "name": "e1",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        }
      ],
      "name": "e2",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "v72",
          "type": "uint256"
        }
      ],
      "name": "e3",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "v122",
          "type": "uint256"
        }
      ],
      "name": "e4",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "v168",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "v169",
          "type": "uint256"
        }
      ],
      "name": "e5",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        }
      ],
      "name": "e6",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        }
      ],
      "name": "e7",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        }
      ],
      "name": "e8",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bal",
          "type": "uint256"
        }
      ],
      "name": "e9",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        }
      ],
      "name": "m1",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        }
      ],
      "name": "m2",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v16",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v72",
          "type": "uint256"
        }
      ],
      "name": "m3",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v16",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v72",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v122",
          "type": "uint256"
        }
      ],
      "name": "m4",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v16",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v72",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v122",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v168",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v169",
          "type": "uint256"
        }
      ],
      "name": "m5",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v16",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v72",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v122",
          "type": "uint256"
        }
      ],
      "name": "m6",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v16",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v72",
          "type": "uint256"
        }
      ],
      "name": "m7",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v16",
          "type": "address"
        }
      ],
      "name": "m8",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_last",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "v7",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "v5",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "v6",
          "type": "uint256"
        }
      ],
      "name": "m9",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]`,
  Bytecode: `0x608060405261001160004360a0610031565b60408051601f19818403018152919052805160209091012060005561003f565b918252602082015260400190565b610e218061004e6000396000f3fe6080604052600436106100865760003560e01c806373929c5e1161005957806373929c5e146100d95780637a52ccb3146100ec5780637de71f08146100ff5780639ccddd3a14610112578063bb91d6e31461012557610086565b8063050147391461008b578063103d2bab146100a05780635e6a8eed146100b3578063718b7dd7146100c6575b600080fd5b61009e610099366004610b32565b610138565b005b61009e6100ae366004610bdc565b610228565b61009e6100c1366004610b83565b61030d565b61009e6100d4366004610b83565b6103f8565b61009e6100e7366004610c40565b6104db565b61009e6100fa366004610cb6565b61072a565b61009e61010d366004610af7565b6107e7565b61009e610120366004610af7565b6108c6565b61009e610133366004610bdc565b610995565b6002858585858560405160200161015496959493929190610d24565b6040516020818303038152906040528051906020012060001c6000541461017a57600080fd5b336001600160a01b0382161461018f57600080fd5b600a850143101580156101a0575060015b6101a957600080fd5b34156101b457600080fd5b6040516001600160a01b038216904780156108fc02916000818181858888f193505050501580156101e9573d6000803e3d6000fd5b507f3a6f8023909a26b76d462631fcdf570dbe3740447548e09470d1ad04394a0cec476040516102199190610ce1565b60405180910390a16000805533ff5b600487878787878787604051602001610248989796959493929190610d91565b6040516020818303038152906040528051906020012060001c6000541461026e57600080fd5b336001600160a01b0384161461028357600080fd5b600a87014310158015610294575060015b61029d57600080fd5b34156102a857600080fd5b6040516001600160a01b038416904780156108fc02916000818181858888f193505050501580156102dd573d6000803e3d6000fd5b507fcb3347bd475fd43f41b4bc5bb011db952f2079e6ba9a82ff211988cd7871dba6476040516102199190610ce1565b6002868686868660405160200161032996959493929190610d24565b6040516020818303038152906040528051906020012060001c6000541461034f57600080fd5b336001600160a01b0386161461036457600080fd5b600a8601431061037357600080fd5b341561037e57600080fd5b7f94dd7e08991b8945fde2d5865f7071e72045b9800e293ff60d29c6960c5a4fb547826040516103af929190610cea565b60405180910390a160034386868686866040516020016103d59796959493929190610d58565b60408051601f198184030181529190528051602090910120600055505050505050565b60038686868686866040516020016104169796959493929190610d58565b6040516020818303038152906040528051906020012060001c6000541461043c57600080fd5b336001600160a01b0386161461045157600080fd5b600a86014310158015610462575060015b61046b57600080fd5b341561047657600080fd5b6040516001600160a01b038616904780156108fc02916000818181858888f193505050501580156104ab573d6000803e3d6000fd5b507ffc55d683ac816a7149ebdfa999ae1bcfeeae27c37c9dab64a23f617beed2a007476040516102199190610ce1565b6004898989898989896040516020016104fb989796959493929190610d91565b6040516020818303038152906040528051906020012060001c6000541461052157600080fd5b610529610a92565b336001600160a01b038a161461053e57600080fd5b600a8a01431061054d57600080fd5b341561055857600080fd5b828260405160200161056b929190610cea565b6040516020818303038152906040528051906020012060001c851461058f57600080fd5b6003821061059c57600080fd5b60038083106040830181905290851060608301526105bb5760006105c1565b80606001515b156105dd576003846004038301816105d557fe5b068152610608565b8060400151156105f05760028152610608565b8060600151156106035760008152610608565b600181525b8051600214156106385760405180604001604052808960020281526020016000815250816020018190525061067d565b80516106645760405180604001604052806000815260200189600202815250816020018190525061067d565b6040805180820190915288815260208082018a90528201525b6020810151516040516001600160a01b038b1691890180156108fc02916000818181858888f193505050501580156106b9573d6000803e3d6000fd5b5060208082015101516040516001600160a01b0388169180156108fc02916000818181858888f193505050501580156106f6573d6000803e3d6000fd5b507f3c3023cc427ae7f284b643c954c1a90afba24284d594cded84550e2316e830f447848460405161021993929190610dd5565b60008360405160200161073e929190610cea565b6040516020818303038152906040528051906020012060001c6000541461076457600080fd5b348183011461077257600080fd5b7f219cc811755104876269c7553666684eaaeecb90b6a7ffc6fdd5068140059b8e4783836040516107a593929190610dd5565b60405180910390a16001433384846040516020016107c7959493929190610cf8565b60408051601f198184030181529190528051602090910120600055505050565b600184848484604051602001610801959493929190610cf8565b6040516020818303038152906040528051906020012060001c6000541461082757600080fd5b336001600160a01b0384161461083c57600080fd5b600a8401431015801561084d575060015b61085657600080fd5b341561086157600080fd5b6040516001600160a01b038416904780156108fc02916000818181858888f19350505050158015610896573d6000803e3d6000fd5b507fc92018b4e91e597d736654f7b1d2ec034c5fec5920e2cfe22e15b4ddcdf5e18a476040516102199190610ce1565b6001848484846040516020016108e0959493929190610cf8565b6040516020818303038152906040528051906020012060001c6000541461090657600080fd5b600a8401431061091557600080fd5b34821461092157600080fd5b7ff04f5fc87a72102f7c0b228f8bbaf9b9aa7a2b5dc295c86538fdde91e95866e9476040516109509190610ce1565b60405180910390a16002438484843360405160200161097496959493929190610d24565b60408051601f19818403018152919052805160209091012060005550505050565b60038787878787876040516020016109b39796959493929190610d58565b6040516020818303038152906040528051906020012060001c600054146109d957600080fd5b336001600160a01b038416146109ee57600080fd5b600a870143106109fd57600080fd5b3415610a0857600080fd5b60038110610a1557600080fd5b7fb71d350b59ceca5c6544e5367d61ca8cae3e36b25f8d900743d063dff3d6508b4782604051610a46929190610cea565b60405180910390a1600443878787878787604051602001610a6e989796959493929190610d91565b60408051601f19818403018152919052805160209091012060005550505050505050565b604051806080016040528060008152602001610aac610ac0565b815260006020820181905260409091015290565b604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114610af157600080fd5b92915050565b60008060008060808587031215610b0c578384fd5b84359350610b1d8660208701610ada565b93969395505050506040820135916060013590565b600080600080600060a08688031215610b49578081fd5b85359450610b5a8760208801610ada565b93506040860135925060608601359150610b778760808801610ada565b90509295509295909350565b60008060008060008060c08789031215610b9b578081fd5b86359550610bac8860208901610ada565b94506040870135935060608701359250610bc98860808901610ada565b915060a087013590509295509295509295565b600080600080600080600060e0888a031215610bf6578081fd5b87359650610c078960208a01610ada565b95506040880135945060608801359350610c248960808a01610ada565b925060a0880135915060c0880135905092959891949750929550565b60008060008060008060008060006101208a8c031215610c5e578182fd5b89359850610c6f8b60208c01610ada565b975060408a0135965060608a01359550610c8c8b60808c01610ada565b989b979a50959894979660a0860135965060c08601359560e0810135955061010001359350915050565b600080600060608486031215610cca578283fd5b505081359360208301359350604090920135919050565b90815260200190565b918252602082015260400190565b94855260208501939093526001600160a01b039190911660408401526060830152608082015260a00190565b95865260208601949094526001600160a01b039283166040860152606085019190915260808401521660a082015260c00190565b96875260208701959095526001600160a01b039384166040870152606086019290925260808501521660a083015260c082015260e00190565b97885260208801969096526001600160a01b0394851660408801526060870193909352608086019190915290911660a084015260c083015260e08201526101000190565b928352602083019190915260408201526060019056fea2646970667358221220a1a872232b2dce94fac67e88ea3b64476238f63249215d6dcaf9dac9156fee8164736f6c63430007000033` };

export const _Connectors = {
  ETH: _ETH };