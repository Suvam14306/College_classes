#include<iostream>
using namespace std;

class student{
private:
 int roll;
 string name;
 int mark;
 double height;
public:
 void input();
 void show();
 void lowest(student arr[],int n);
};
void student :: input()
{
cout<<"enter student name"<<endl;
cin>>name;
cout<<"enter student roll"<<endl;
cin>>roll;
cout<<"enter student mark"<<endl;
cin>>mark;
cout<<"enter student height"<<endl;
cin>>height;
}

void student :: show()
{
cout<<"student name is ";
cout<<name<<endl;
cout<<"student roll is ";
cout<<roll<<endl;
cout<<"student mark is ";
cout<<mark<<endl;
cout<<"student height is ";
cout<<height<<endl;
}

void student :: lowest(student arr[],int n)
{
student lowest = arr[0];
for(int i=0;i<n;i++){
if(arr[i].mark>lowest.mark)
{
lowest=arr[i];
}
}
cout<<"the lowest mark secured by "<<lowest.name;
}

int main(){
student arr[100];
int n;
cout<<"enter the no of student";
cin>>n;
for(int i=0;i<n;i++){
cout<<"enter data for student "<<i+1<<endl;
arr[i].input();
}

for(int i=0;i<n;i++){
cout<<"details for student "<<i+1<<endl;
arr[i].show();
}
arr[0].lowest(arr,n);
return 0;
}











