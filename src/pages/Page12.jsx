import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

const Page12 = () => {
  return (
    <div className="page page12">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            宴席信息
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text text-gray-700 mb-6 leading-relaxed">
            诚邀您参加我们的婚礼宴席，共同见证这幸福时刻
          </div>
          
          <div className="info-section mb-6">
            <div className="info-item flex justify-between mb-3 py-2 border-b border-gray-200">
              <div className="info-label font-bold text-gray-700">时间：</div>
              <div className="info-value text-gray-600">2024年10月1日 中午12:00</div>
            </div>
            <div className="info-item flex justify-between mb-3 py-2 border-b border-gray-200">
              <div className="info-label font-bold text-gray-700">地点：</div>
              <div className="info-value text-gray-600">北京市朝阳区某某大酒店</div>
            </div>
            <div className="info-item flex justify-between mb-3 py-2 border-b border-gray-200">
              <div className="info-label font-bold text-gray-700">地址：</div>
              <div className="info-value text-gray-600">北京市朝阳区某某路123号</div>
            </div>
            <div className="info-item flex justify-between mb-3 py-2 border-b border-gray-200">
              <div className="info-label font-bold text-gray-700">宴会厅：</div>
              <div className="info-value text-gray-600">三楼金色大厅</div>
            </div>
          </div>
          
          <div className="heart text-4xl mb-4">❤️</div>
          <div className="names text-xl font-semibold text-gray-700 mb-2">张三 & 李四</div>
          <div className="text text-gray-600 text-sm">敬邀</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page12;