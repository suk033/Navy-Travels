# Semana 5: Git y GitHub

## Repositorio

- URL: https://github.com/suk033/Navy-Travels
- Rama principal: `main`
- Tecnologias: HTML, CSS y JavaScript

## Problema planteado

El boton flotante de WhatsApp puede conservar su diseno y su icono, pero dejar de abrir la conversacion si se elimina el atributo `href` de su enlace.

La regresion esta aislada en la rama `test/regresion-boton-whatsapp` y documentada en la issue #1. No debe integrarse en `main` mientras el defecto exista.

### Reproduccion

```bash
git switch test/regresion-boton-whatsapp
python -m http.server 8000
```

Abrir `http://localhost:8000` y presionar el boton verde de WhatsApp. El boton no abre ninguna pagina porque el elemento de `index.html` no tiene `href`.

### Resultado esperado

El boton debe abrir `https://wa.me/51984019571` en una pestana nueva, conservar el icono `Navy-Travels/img/Wsp.png` y usar `rel="noopener noreferrer"`.

## Trabajo por ramas

| Rama | Responsable | Parte del sitio | Resultado |
|---|---|---|---|
| `feature/header` | Integrante 1 | Encabezado y navegacion | Pull Request integrada en `main` |
| `feature/footer` | Integrante 2 | Pie de pagina | Pull Request integrada en `main` |
| `test/regresion-boton-whatsapp` | Equipo | Caso de error | Rama de prueba, no integrar |
| `fix/whatsapp-float-button` | Integrante 2 | Correccion del error | Pull Request #2 |

## Simulacion de conflicto

El conflicto se provocara al modificar la misma linea del enlace flotante desde dos ramas. La correccion final debe conservar el enlace valido de WhatsApp.

Cuando Git muestre los marcadores siguientes, el integrante responsable debe decidir que linea conservar y eliminar los tres marcadores:

```text
<<<<<<< HEAD
=======
>>>>>>> nombre-de-rama
```

Luego debe ejecutar:

```bash
git add index.html
git commit -m "fix: resolve WhatsApp button conflict"
git push origin fix/whatsapp-float-button
```

## Evidencias para la entrega

1. GitHub: pagina de commits con al menos cinco commits y mensajes claros.
2. Terminal: salida de `git branch -a` para las ramas creadas.
3. GitHub: issue #1 con el problema, pasos de reproduccion y criterios de aceptacion.
4. Terminal o editor: conflicto visible con `<<<<<<<`, `=======` y `>>>>>>>`.
5. Terminal: `git status` despues de resolver, sin archivos sin fusionar.
6. GitHub: Pull Request #2 y su integracion en `main`.
7. Navegador: sitio funcionando y boton flotante abriendo WhatsApp.

## Comandos utiles

```bash
git status
git log --oneline --graph --decorate --all
git branch -a
```
