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
	void show(){
		cout<<"x="<<x<<endl;
	}
};	
class B
{
	protected:
	int y;
	public:
	void read(int a){
		y=a;
	}
	void show(){
		cout<<"y="<<y<<endl;
	}
};	
class C:public A,public B
{
	int z;
	public:
	void get(int a,int b,int c){
		input(a);
		read(b);
		z=c;
		
	}
	void put(){
		show();
		cout<<"z="<<z<<endl;
	}
};	

int main()
{
	C oc;
	oc.get(88,99,22);
	oc.put();
	return 0;
	
}
