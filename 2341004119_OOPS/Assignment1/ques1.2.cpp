#include<iostream>
using namespace std;



void swap(int &p,int &q);
int main()
{
 int a,b;
  cout<<"\nEnter 2 integers\n";
  cin>>a>>b;
  cout<<"Before swap a ="<<a<<"and b ="<<b<<"\n";
  swap(a,b);
  cout<<"After swap a ="<<a<<"and b ="<<b<<"\n";
  return 0;
}

void swap(int &p,int &q)
{
  int temp = p;
   p = q;
   q = temp;
}


