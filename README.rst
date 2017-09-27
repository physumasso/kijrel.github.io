Bienvenue sur le répositoire git du site web de la PHYSUM!
==========================================================

La version originale du site est un fork de : kijrel.github.io

Le site web de l'association est en ligne à cette
`addresse <http://www.aephysum.umontreal.ca>`_.

Contribuer
----------

Si vous voulez contribuer au site web de la PHYSUM, il y aa plusieurs
façon de procéder:

1 - Contactez un des membres du conseil d'administration! Ce sont eux qui
    ont accès au serveur qui héberge le site. Pour des modifications
    mineures (typo, fautes de français, ...), il s'agit probablement
    de la façon la plus efficace pour procéder.
2 - Pour des modifications au code source du site, comme l'ajout de lien,
    d'évènements ou tout autre ajout, il est préférable de faire une
    modification par l'entremise de git. Ainsi, si à long terme des gens
    se rendent compte que le site est brisé, il sera plus facile de le
    réparer en utilisant les outils de git.

Contribution du ou de la Webmestre
----------------------------------

Pour toute modification qui concerne les fichier json (membres exec, comités, évènements); faire
cela directement sur le serveur de l'Université de Montréal, car les fichiers sur
GitHub ne contiennent aucune information utile par défaut. Pour toute autre
modifcation (modification du fichier index.html, du fichier css ou de tout autre fichier
javascript), faire la modification en utilisant le workflow Git avant de copier
les fichiers sur le serveur (voir ci-bas).

Contribuer avec git
-------------------

Note: il faut que git soit installé (ce qui n'est pas le cas par défaut sur Windows).

0 - Faire un fork du répertoire GitHub (cliquer sur le bouton fork en haut de la page).

1 - Cloner une copie locale du fork. Il faut connaître l'adresse ssh (ou http) du fork. Elle
    s'affiche lorsqu'on clique sur le bouton <<Clone or download>> ::
   
  >> git clone https://github.com/username/physumwebsite.git

2 - Une fois le clone créer, changer de répertoire pour y entrer et créer une nouvelle branche::

  >> cd physumwebsite
  >> git checkout -b branche_de_modification

3 - Effectuer les modifications du site.

4 - Lorsque tout est terminé et que tout fonctionne (voir plus bas),
    faire les commits des modifications et faire un push de la branche locale vers le fork (origin par défaut)::

  >> git commit -am "description de la modification"
  >> git push origin branche_de_modification

5 - Faire un <<Pull Request>> de la branche récemment poussée sur le fork
    vers le répertoire officiel sur le compte de l'Association. Ceci se fait via l'interface
    web sur GitHub. Le pull request se fait contre la branche <<master>>.

6 - Contacter un membre du conseil d'administration (ou du moins quiconque possède les droits
    d'administration du compte GitHub de la PHYSUM) pour faire une
    révision de la modification et accepter le pull request. Ensuite,
    le ou la webmestre (ou quiconque à accès au serveur où le site web est hébergé)
    doit faire une update le site web en copiant la branche master
    du répositoire dans le dossier correspondant sur le serveur de
    l'université.

Hébergement local du site
-------------------------

Après avoir fait une modification du site, il est désirable d'afficher
le site sur un navigateur web afin de voir si tout fonctionne encore.
Étant donné que le site est construit avec la librairie Bootstrap, il
est requis d'avoir un serveur http qui supporte cette librairie. La librarie appache 2
fonctionne en ce sens.

Linux
*****

Sur linux, installez
apache2 si ce n'est pas déjà inclu dans votre disrtibution linux.
Ensuite, roulez la commande::

  >> sudo systemctl start apache2.service

ceci va démarrer le serveur. Ensuite, copiez tous les fichiers du site web
dans le dossier `/var/www/html/` (qui doit être préalablement vide ou dans un nouveau sous répertoire) et
ouvrez n'importe quel navigateur web sur `localhost`. Le site web
devrait être visible sur cette addresse (ou à une sous adresse si le site a été copié dans un sous répertoire).

Windows
*******

Sous windows, il est possible d'utiliser un serveur apache également.
Voir : https://httpd.apache.org/docs/2.4/fr/platform/windows.html

MacOSX
******

Il est possible de démarrer un serveur local sur Mac également.
Dépendamment de la version de l'OS, les instructions peuvent
différer.
