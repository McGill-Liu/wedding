import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page8 = () => {
  return (
    <div className="page page8">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            家人祝福
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            我们的爱情得到了双方父母的祝福，他们是我们最坚强的后盾。
          </div>
          <img src="/images/8.jpg" alt="家人祝福" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page8;