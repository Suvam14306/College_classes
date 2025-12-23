 class product
 {
 private:
 int pid;

 double price;
 int rating;
 
 public:
 void input(int ,double,int);
 void show();
 };
 
 void product :: input(int a,double c,int d)
 {
 pid = a;

 price = c;
 rating = d;
 };
 void product :: show()
 {
   cout <<pid<<price<<rating;
 };
 int main()
 {
 product p1;
 p1.input(123,23.4,3);
 p1.show();

 return 0;
 };
 
 
 
