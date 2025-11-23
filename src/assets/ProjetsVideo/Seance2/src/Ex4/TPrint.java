package Ex4;
class TPrint extends Thread {
    static Impression mImp = new Impression();
    String txt;
    public TPrint(String t) {
        txt = t;
    }
    public void run() {
        for (int j=0; j<3; j++)
        {mImp.imprime(txt);}
    }
    static public void main(String args[]) {
        TPrint a = new TPrint("bonjour ");
        TPrint b = new TPrint("au revoir ");
        a.start();
        b.start();
    }
}