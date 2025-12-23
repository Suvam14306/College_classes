#include<iostream>
using namespace std;
class A
{
	protected:
	int x;
	public:
	void input(int a){
		x=a;
	}
	void disp(){
		cout<<"x="<<x<<endl;
	}
};	
class B:public A
{
	int y;
	public:
	void read(int a,int b){
		x=a;
		y=b;
	}
	void show(){
		cout<<"x="<<x<<endl;
		cout<<"y="<<y<<endl;
	}
};
class D
{
	protected:
	int s;
	public:
	void read2(int a){
		s=a;
	}
	void show2(){
		cout<<"s="<<s<<endl;
	}
};	
class C:public B,public D
{
	int z;
	public:
	void get(int a,int b,int c,int d){
		
		read(a,b);
		read2(c);
		z=d;
		
	}
	void put(){
		disp();
		show();
		show2();
		cout<<"z="<<z<<endl;
	}
};	

int main()
{
	
	C oc;
	oc.get(88,99,120,33);
	oc.put();
	return 0;
	
}
