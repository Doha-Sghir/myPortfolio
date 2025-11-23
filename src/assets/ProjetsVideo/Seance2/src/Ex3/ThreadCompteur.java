package Ex3;

class ThreadCompteur extends Thread {
    int no_fin; int attente;
    ThreadCompteur (int fin,int att) {
        no_fin = fin; attente=att;}
    // On redéfinit la méthode run()
    public void run () {
        for (int i=1; i<=no_fin ; i++) {
            System.out.println(this.getName()+":"+i);
            try {sleep(attente);}
            catch(InterruptedException e) {};}
    }
    public static void main (String args[]) {
    // On instancie les threads
        ThreadCompteur cp1 = new ThreadCompteur
                (60,1000);
        ThreadCompteur cp2 = new ThreadCompteur
                (50,500);
        cp1.start();
        cp2.start();
    }
}