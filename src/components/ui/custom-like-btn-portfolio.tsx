"use client";
import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import getUserCountry from "js-user-country";
import { useAppContext } from '../../context/AppContext';
import { FloatingHeart } from '../HeroParallaxPortfolio/FloatingHeart';

export const LikeButton = ({ projectTitle }: { projectTitle: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { showFloatingHeart, setShowFloatingHeart } = useAppContext();

  // Safely access window and localStorage only on the client side
  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== "undefined") {
      const liked = localStorage.getItem(`like_${projectTitle}`);
      if (liked) {
        setIsLiked(true);
      }
    }
  }, [projectTitle]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLiked) {
      try {
        // Safely access window object
        if (typeof window !== "undefined") {
          const browserInfo = {
            userAgent: window.navigator.userAgent,
            language: window.navigator.language,
            platform: window.navigator.platform,
            timestamp: new Date().toISOString(),
            projectTitle: projectTitle,
            country: getUserCountry().name,
            city: 'Unknown',
            region: 'Unknown',
            ip: 'Unknown',
          };

          localStorage.setItem(`like_${projectTitle}`, 'true');
          setIsLiked(true);
          setShowFloatingHeart(true);

          setTimeout(() => {
            setShowFloatingHeart(false);
          }, 4000);

          const response = await fetch('/api/like-notification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(browserInfo),
          });
        }
      } catch (error) {
        console.error('Error sending like notification:', error);
      }
    } else {
      localStorage.removeItem(`like_${projectTitle}`);
      setIsLiked(false);
    }
  };

  return (
    <motion.div>
      <motion.a
        onClick={handleLike}
        whileHover={{ scale: 1.1 }}
        className={`transition-colors duration-200 z-50 absolute right-6 top-8  ${isLiked ? 'text-red-500' : 'text-white hover:text-red-500'}`}
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </motion.a>

      {/* Display FloatingHeart if liked */}
      {showFloatingHeart && <FloatingHeart />}
    </motion.div>
  );
};
