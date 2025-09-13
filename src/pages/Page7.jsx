import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page7 = () => {
  return (
    <div className="page page7">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            婚纱照
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            我们在最美的季节，拍下了最美的照片，记录下我们最幸福的时刻。
          </div>
          <div className="image-container">
            <img src="/images/7-1 新.jpg" alt="婚纱照1" className="half-image" />
            <img src="/images/7-2 新.jpg" alt="婚纱照2" className="half-image" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page7;