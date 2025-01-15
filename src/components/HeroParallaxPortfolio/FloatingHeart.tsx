// components/FloatingHearts.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export const FloatingHeart = () => {
    return (
        <>

            <motion.div>
                <div className="wrapper">
                    <div className="heart x1"></div>
                    <div className="heart x2"></div>
                    <div className="heart x3"></div>
                    <div className="heart x4"></div>
                    <div className="heart x5"> </div>
                    <div className="altheart x6"></div>
                </div>
            </motion.div>
            {/* ))} */}
        </>
    );
};
