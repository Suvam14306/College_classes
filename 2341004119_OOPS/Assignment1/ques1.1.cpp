#include<iostream>
using namespace std;

int main(){

enum Day {monday,tuesday,wednesday,thursday,friday,saturday,sunday};
int num;
cout<<"\nEnter a number between 0-6\n";
cin>>num;
Day enum_day=Day(num);

switch(enum_day)
{
 case monday:
 cout<<"\nmonday\n";
 break;
 case tuesday:
 cout<<"\ntuesday\n";
 break;
 case wednesday:
 cout<<"\nwednesday\n";
 break;
 case thursday:
 cout<<"\nthursday\n";
 break;
 case friday:
 cout<<"\nfriday\n";
 break;
 case saturday:
 cout<<"\nsatday\n";
 break;
 case sunday:
 cout<<"\nsunday\n";
 break;
 }
return 0;
}

