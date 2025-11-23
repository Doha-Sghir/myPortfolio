package Ex4;
class Impression {
    synchronized public void imprime(String t)
    {
        for (int i=0; i<t.length(); i++) {
            System.out.print(t.charAt(i));
        }
    }
}