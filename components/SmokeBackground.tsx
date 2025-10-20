import React, { useMemo, useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const SmokeBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const options: ISourceOptions = useMemo(() => ({
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: { min: 0.05, max: 0.15 },
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                    startValue: "random",
                    destroy: "min",
                },
            },
            size: {
                value: { min: 20, max: 40 },
                animation: {
                    enable: true,
                    speed: 3,
                    sync: false,
                    startValue: "random",
                    destroy: "max",
                },
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                straight: false,
                random: true,
                outModes: {
                    default: "out",
                },
            },
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: false,
                },
                onClick: {
                    enable: false,
                },
            },
        },
        detectRetina: true,
    }), []);
    
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
};

export default SmokeBackground;