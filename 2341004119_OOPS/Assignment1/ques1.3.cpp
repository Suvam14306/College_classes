#include<iostream>
using namespace std;

int main(){
int size;
cout<<"\nEnter a size\n"; 
cin>>size;
int* arr = new int[size];
cout<<"\nEnter the elements\n";
for(int i=0;i<size;i++)
{
 cin>>arr[i];
}
cout<<"\nThe elements in the vector are\n";
for(int j=0;j<size;j++)
{
 cout<<arr[j];
}


return 0;
 }
