#include<iostream>
using namespace std;

int main(){
int n;
int m;
cout<<"\nEnter the value of m\n";
cin>>m;
cout<<"\nEnter the value of n\n";
cin>>n;


int* p= new int[n];
int** a= new int8 [m];
for(int i=0; i<m ; i++)
{
a[i]=new int [n];
}




return 0;
}
