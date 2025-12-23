#include<iostream>
using namespace std;



class employee{
private:
int empid;
string ename;
double salary;
string department;

public :
void input();
void show();
void compare(employee,employee);

};

void employee :: input()
{
cout<<"enter emplyoee name"<<endl;
cin>>ename;
cout<<"enter employee id"<<endl;
cin>>empid;
cout<<"enter salary"<<endl;
cin>>salary;
cout<<"enter department"<<endl;
cin>>department;
}

void employee :: show()
{
cout<<"employee name is ";
cout<<ename<<endl;
cout<<"employee id is ";
cout<<empid<<endl;
cout<<"employee salary is ";
cout<<salary<<endl;
cout<<"employee department is ";
cout<<department<<endl;
}

void employee :: compare(employee e1,employee e2)
{
if(e1.salary>e2.salary)
{
cout<<"the highest salsry is of "<<e1.ename;
}
else{
cout<<"the highest salsry is of "<<e2.ename;
}

}

int main()
{
employee e1;
employee e2;
e1.input();
e1.show();
e2.input();
e2.show();
e1.compare(e1,e2);
return 0;



}
















