#include<iostream>
using namespace std;

void calc(int &a,int &b);
int main()
{
 int a,b;
  cout<<"\nEnter 2 integers\n";
  cin>>a>>b;
  cout<<"Before Calculation a ="<<a<<"and b ="<<b<<"\n";
  calc(a,b);
  cout<<"After Calculation a ="<<a<<"and b ="<<b<<"\n";
  return 0;
}
void calc(int m ,int n)
{
   if(m<n)//id(a,b)
   {
   m=m+n;
   n=n+m;
   }
   else{
   m=n+m;
   n=n+n;
   }
   cout<<"Inside calc function a="<<m<<"and b="<<n<<"\n";
   
   /*int a=10;
   int &b=a;
   cout<<a<<" "<<b<<"\n";
   cout<<&a<<" "<<&b;
   b=40;
   cout<<"\na="<<a;
   int &c=b;
   cout<<"\n"<<a<<" "<<b<<" "<<c;
   return 0;*/
}
