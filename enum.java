package basicjava;

 class EnumExample1 {
public enum Season{	WINTER,SPRING,SUMMER,FALL}
public static void main(String args[])
{
	for(Season s:Season.values()) {
		System.out.println(s);
	}
	System.out.println("value of winter is:"+Season.valueOf("WINTER"));
	System.out.println("Index of winter is:"+Season.valueOf("WINTER").ordinal());
	System.out.println("Index of winter is:"+Season.valueOf("SUMMER").ordinal());
}
}

outside class:
package basicjava;
enum Season{WINTER,SUMMER,FALL,SPRING}
public class EnumExample2 {
public static void main(String args[])
{
	Season s=Season.WINTER;
	System.out.println(s);
}
}
