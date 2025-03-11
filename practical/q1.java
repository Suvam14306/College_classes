package practical;

public class q1 {

	public static void main(String[] args) {
		String str="udsefi";
		for(int i=0;i<str.length();i++)
		{
			int count=1;
			System.out.print(str.charAt(i));
			for(int j=i+1;j<str.length();j++)
			{
				if(str.charAt(i)==str.charAt(j))
				{
					count++;
				}
			}
			System.out.println(count+" ");
		}
}
}