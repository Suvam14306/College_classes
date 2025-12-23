#include<iostream>
using namespace std;

class time{
 private:
 int hour;
 int min;
 int sec;
 
 public:
 void input();
 void display();
 void add(time,time);
}

void student :: input()
{
cout<<"enter hour";
cin>>hour<<endl;
cout<<"enter min";
cin>>min<<endl;
cout<<"enter sec";
cin>>sec<<endl;

}

void student :: show()
{
cout<<" hour ";
cout<<hour<<endl;
cout<<" min ";
cout<<min<<endl;
cout<<" sec ";
cout<<sec<<endl;
}

void student :: add(time t1,time t2)
{
time temp;
temp.hour=t1.hour+t2.hour


}







