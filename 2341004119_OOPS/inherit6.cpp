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
class C:public A
{
	int z;
	public:
	void get(int a,int b){
		input(a);
		z=b;
		
	}
	void put(){
		disp();
		cout<<"z="<<z<<endl;
	}
};	
class D:public B,public C
{
	public:
	void display(){
		cout<<"x="<<B::x<<endl;
		cout<<"x="<<C::x<<endl;
		}
};		
int main()
{
	D od;
	od.B::input(3);
	od.C::input(11);
	od.display();
	return 0;
	
}
