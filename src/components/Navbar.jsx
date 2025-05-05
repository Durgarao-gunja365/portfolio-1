import { Canvas } from '@react-three/fiber';
import { OrbitControls, Icosahedron } from '@react-three/drei';
import { motion } from 'framer-motion';

const Logo3D = () => (
  <Canvas className="w-16 h-16">
    <ambientLight intensity={0.7} />
    <directionalLight position={[0, 0, 2]} />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    <Icosahedron args={[1, 0]}>
      <meshStandardMaterial color="#4ade80" wireframe />
    </Icosahedron>
  </Canvas>
);

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-lg"
    >
      <div className="max-w-9xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="w-12 h-12">
          <Logo3D />
        </div>
        <ul className="flex space-x-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-white uppercase tracking-wide hover:text-green-300 transition"
              >
                <span className="group relative">
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
