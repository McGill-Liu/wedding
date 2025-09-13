import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page3 = () => {
  return (
    <div className="page page3">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            爱情故事
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            还记得第一次见面时的紧张与激动，那一刻起，我们的故事就开始了。
          </div>
          <div className="image-container">
            <img src="/images/3-1.jpg" alt="初次见面" className="half-image" />
            <img src="/images/3-2.jpg" alt="甜蜜时光" className="half-image" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page3;