import React, { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useTime } from "framer-motion";
//import CanvasLoader from "./loader"
//import logo from "../../../static/logo/RR7.gltf"
//"./static/logo/RR7.gltf"
const Logo = () => {

    const yAngle = 0.1;
    const distance = 150;
    const time = useTime();
    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            distance,
            yAngle,
            -time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(70, -40, 100);
    });
    const logo = useGLTF("../../../static/logo/RR7.gltf");
    return (
        <mesh>
            <directionalLight intensity={10} position={[50, 50, 30]} />
            <directionalLight intensity={10} color="#ffffff" position={[0, 0.2, 5]} />
            <directionalLight color="#c02d7e" intensity={2} position={[100, 50, 50]} />
            <directionalLight color="#992d1a" intensity={2} position={[100, 50, 5]} />
            <directionalLight intensity={6} position={[400, 100, 500]} />
            <directionalLight color="#196934" intensity={5} position={[600, 50, 700]} />
            <directionalLight color="#69175e" intensity={2} position={[500, 500, 300]} />
            <directionalLight color="#940d3a" intensity={2} position={[400, 70, 100]} />
            <primitive object={logo.scene} />
        </mesh>
    )
}

const LogoCanvas = () => {
    const ref = useRef();
    return (
        <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 0], fov: 80 }}>
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <Logo />
            </Suspense>

            <OrbitControls ref={ref} autoRotate={true} />
        </Canvas>
    )
}
export default LogoCanvas;