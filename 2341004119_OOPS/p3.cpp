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

int main()
{
	B ob;
	ob.read(5,21);
	ob.show();
	C oc;
	oc.get(88,99);
	oc.put();
	return 0;	
}
