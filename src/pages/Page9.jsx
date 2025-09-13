import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page9 = () => {
  return (
    <div className="page page9">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            婚礼场地
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            我们选择了一个美丽的地方举办婚礼，那里有我们共同喜欢的风景。
          </div>
          <img src="/images/2.jpg" alt="婚礼场地" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page9;