import { motion } from 'framer-motion';

function LoadingAnimation() {
  return (
    <div className="text-2 text-white">
      <div className="flex items-end">
        <span>loading</span>
        <div className="w-6 flex flex-row justify-evenly align-center  mb-1 ">
          <motion.div
            className="h-[0.1rem] w-[0.1rem] bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              transition: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0,
              },
            }}
          />
          <motion.div
            className="h-[0.1rem] w-[0.1rem] bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 0],
              transition: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.1,
              },
            }}
          />
          <motion.div
            className="h-[0.1rem] w-[0.1rem] bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0, 1, 0],
              transition: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.2,
              },
            }}
          />
        </div>
      </div>
      <div className="w-32 h-2 bg-white border border-solid border-white border-1 rounded-md">
        <motion.div
          className="h-full bg-black rounded-md "
          initial={{ width: 0 }}
          animate={{
            width: ['0%', '100%'],
            transition: {
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
            },
          }}
        />
      </div>
    </div>
  );
}

export default LoadingAnimation;