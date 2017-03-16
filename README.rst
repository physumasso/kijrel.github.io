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

Contribuer avec git
-------------------

1 - Cloner une copie locale du répositoire du site web::
   
  >> git clone https://github.com/physumasso/physumwebsite.git

Aussi possible de le faire via un fork.

2 - créer une nouvelle branche::

  >> git checkout -b branche_de_modification

3 - Effectuer les modifications du site.
4 - Lorsque tout est terminé et que tout fonctionne (voir plus bas),
    faire les commits des modifications et
    faire un push de la branche locale vers les répositoire git officiel
    du site web de l'association::

  >> git commit -am "description de la modification"
  >> git push origin branche_de_modification

5 - Aller sur le répositoire sur github et faire un pull(merge) request
    de la branche poussée avec la branche master.
6 - Contacter un membre du conseil d'administration pour faire une
    révision de la modification et accepter le pull request. Ensuite,
    ce membre doit faire une update le site web en copiant la branche master
    du répositoire dans le dossier correspondant sur le serveur de
    l'université.

Hébergement local du site
-------------------------

Après avoir fait une modification du site, il est désirable d'afficher
le site sur un navigateur web afin de voir si tout fonctionne encore.
Étant donné que le site est construit avec la librairie Bootstrap, il
est requis d'avoir un serveur http qui supporte cette librairie.

Linux
*****

Sur linux, apache2 est un serveur HTTP qui fonctionne. D'abord, installez
apache2 si ce n'est pas déjà inclu dans votre disrtibution linux.
Ensuite, roulez la commande::

  >> sudo systemctl start apache2.service

ceci va démarrer le serveur. Ensuite, copiez tous les fichiers du site web
dans le dossier `/var/www/html/` (qui doit être préalablement vide) et
ouvrez n'importe quel navigateur web sur `localhost`. Le site web
devrait être visible sur cette addresse.

Windows
*******

Sous windows, il est possible d'utiliser un serveur apache également.
Voir : https://httpd.apache.org/docs/2.4/fr/platform/windows.html

MacOSX
******

Il est possible de démarrer un serveur local sur Mac également.
Dépendamment de la version de l'OS, les instructions peuvent
différer.
