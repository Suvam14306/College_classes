#include<iostream>
using namespace std;

class volume{
private:
 int ltr;
 int ml;
public:
 void input(int,int);
 void show();
};

void volume::input(int a,int b)
{
 ltr=a;
 ml=b;
}

void volume::show()
{
cout<<ltr<<"litres"<<ml<<"ml"<<endl;
}

int main(){
 volume v1;
 v1.input(2,3);
 v1.show();
 volume v2;
 v2.input(4,5);
 v2.show();
}
