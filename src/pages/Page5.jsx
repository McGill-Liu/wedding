import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page5 = () => {
  return (
    <div className="page page5">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
            求婚时刻
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            那一刻，你单膝跪地，拿出戒指，问我愿意嫁给你吗？我激动得说不出话来，只能点头答应。
          </div>
          <img src="/images/5.jpg" alt="求婚照片" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page5;