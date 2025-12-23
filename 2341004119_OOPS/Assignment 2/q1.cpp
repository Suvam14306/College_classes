#include<iostream>
#include<string>
using namespace std;

class Account{
private:
  string name;
  int accno;
  string type;
  double amount;
public:
  void input(string,int,string,double);
  void deposit(double);
  void withdraw(double);
  void display();
};

 void Account :: input(string a,int b,string c,double d)
{
name=a;
accno=b;
type=c;
amount=d;
}

void Account :: deposit(double dep)
{
amount=amount+dep;
}

void Account :: withdraw(double with)
{
if(with<=amount)
{
amount=amount-with;
}
else{
cout<<"insufficient balalnce";
}
}
void Account :: display(){
cout<<"Account Holder: "+name<<endl;
cout<<"balance : "<<amount;
}
 int main(){
 
 Account a1;
 a1.input("swayam",1234,"saving",310000);
 a1.deposit(80000);
 a1.withdraw(300000);
 a1.display();
 return 0;

 }

