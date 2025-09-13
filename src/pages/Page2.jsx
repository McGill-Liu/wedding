import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page2 = () => {
  return (
    <div className="page page2">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            时光荏苒
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            从相识到相知，从相知到相爱，我们一起走过了许多美好的时光。
          </div>
          <img src="/images/1-2.jpg" alt="回忆照片" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page2;