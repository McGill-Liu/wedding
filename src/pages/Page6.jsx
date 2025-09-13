import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page6 = () => {
  return (
    <div className="page page6">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            筹备婚礼
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            为了这一天，我们精心准备了很久。从选择场地到确定婚纱，每一个细节都充满了爱意。
          </div>
          <img src="/images/6.jpg" alt="筹备婚礼" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page6;