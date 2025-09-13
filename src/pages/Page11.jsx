import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page11 = () => {
  return (
    <div className="page page11">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            期待与您相聚
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            感谢您的关注与祝福，我们期待在婚礼当天与您共同分享这份喜悦！
          </div>
          <div className="heart text-4xl mb-4">❤️</div>
          <div className="names text-xl font-semibold text-gray-700 mb-6">张三 & 李四</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page11;