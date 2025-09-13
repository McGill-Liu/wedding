import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page4 = () => {
  return (
    <div className="page page4">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            浪漫时刻
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            一起看过的日出日落，一起走过的每一条街道，都是我们爱情的见证。
          </div>
          <div className="image-container">
            <img src="/images/4-1.jpg" alt="浪漫日出" className="half-image" />
            <img src="/images/4-2.jpg" alt="黄昏漫步" className="half-image" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page4;