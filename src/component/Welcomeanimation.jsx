import React, { useState, useEffect } from 'react';

function WelcomeAnimation() {
  const [displayText, setDisplayText] = useState('');
  const message = "Welcome! I'm here to help you work on your big ideas. Type away, and let’s bring them to life!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + message[index]);
      index++;
      if (index === message.length) clearInterval(typingInterval);
    }, 50); // Adjust typing speed as desired
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-gray-900 text-green-500 font-mono text-lg w-full max-w-xl rounded-lg shadow-lg border border-gray-700 p-6">
        {/* Terminal Header with Buttons */}
        <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-t-lg">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Animated Typing Text */}
        <div className="mt-4">
          <p>{displayText}<span className="blinking-cursor">|</span></p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeAnimation;
