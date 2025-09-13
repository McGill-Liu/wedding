import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import '../App.css';

const Page1 = () => {
  return (
    <div className="page page1">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            我们结婚啦
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="names text-2xl font-semibold text-gray-700 mb-4">张三 & 李四</div>
          <div className="date text-xl text-gray-600 mb-6">2024.10.01</div>
          <img src="/images/1-1.jpg" alt="婚礼照片" className="page-image mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page1;