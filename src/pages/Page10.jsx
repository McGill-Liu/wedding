import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page10 = () => {
  return (
    <div className="page page10">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            诚邀您的到来
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            我们诚挚地邀请您参加我们的婚礼，见证我们人生中最重要的时刻。
          </div>
          <img src="/images/10.jpg" alt="婚礼邀请" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page10;