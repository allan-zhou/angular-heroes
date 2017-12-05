import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: '曹操' },
        { id: 12, name: '关羽' },
        { id: 13, name: '张飞' },
        { id: 14, name: '赵云' },
        { id: 15, name: '马超' },
        { id: 16, name: '黄忠' },
        { id: 17, name: '刘备' },
        { id: 18, name: '孙权' },
        { id: 19, name: '吕布' },
        { id: 20, name: '典韦' }
    ];
    return {heroes};
  }
}