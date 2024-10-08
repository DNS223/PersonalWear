import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '@/store';

const Shirt = ({positionX, positionY, grados}) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {easing.dampC(materials.lambert1.color,
     snap.color, 0.25, delta)});

  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
      {console.log((positionX))}
        {snap.isLogoTexture && (
          <Decal 
            position={[ parseFloat(positionX), parseFloat(positionY), 0.15]}
            rotation={[0, 0, parseFloat(grados)]}
            scale={0.15}
            map={logoTexture}
          
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt