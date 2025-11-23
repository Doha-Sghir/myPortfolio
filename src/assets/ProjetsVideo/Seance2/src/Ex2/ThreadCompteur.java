package Ex2;

public class ThreadCompteur extends Thread{
    int no_fin;
    ThreadCompteur(int fin){
        no_fin=fin;
    }
    public void run(){
        for(int i=1;i<=no_fin;i++){
            System.out.println(this.getName() + " : " + i);
        }
    }
    public static  void main(String[] args){
        ThreadCompteur cp1 = new ThreadCompteur(1000);
        ThreadCompteur cp2 = new ThreadCompteur(2000);
        cp1.start();
        cp2.start();
    }
}
