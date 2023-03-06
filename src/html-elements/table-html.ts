/**
 * list-html.ts
 *  Build ul or ol list with some elements
 * @version 1.0.0
 */
export class TableHTML {
  /**
   * Class attributes
   */
  private listType: string = "ul";


  
  private listContent: Array<any> = [
    {
      name: 'Aubert',
      firstName: 'Jean-Luc'
    },
    {
      name: 'Talut',
      firstName: 'Jean'
    },
    {
      name: 'Saulay',
      firstName: 'Mélanie'
    },
  ]


  public setListType(listType: string): void {
    this.listType = listType;
  }

  public build(): HTMLTableElement {
    // Have to build a ul | ol list with as many li as listContent length
    // <ul>
    //  <li>Aubert</li>
    //  <li>Talut</li>
    //  <li>Saulay</li>
    // </ul>

    /**
     * Create a new Object in the DOM
     */
    const list: HTMLTableElement = document.createElement("table");

    const theadLine: HTMLElement = document.createElement("thead");
    const trLine: HTMLTableRowElement = document.createElement("tr");
    const thLine: HTMLElement = document.createElement("th");
    thLine.setAttribute("colspan","2");
    thLine.textContent = "Noms des participants";
    list.appendChild(theadLine);
    theadLine.appendChild(trLine);
    trLine.appendChild(thLine);
    const tbodyLine: HTMLElement = document.createElement("tbody");
    list.appendChild(tbodyLine);

    for (const name of this.listContent) {
      const trLine2: HTMLElement = document.createElement("tr");
      const tdLine: HTMLElement = document.createElement("td");
      tdLine.textContent = name.name;
      const tdLine2: HTMLElement = document.createElement("td");
      tdLine2.textContent = name.firstName;
      tbodyLine.appendChild(trLine2);
      trLine2.appendChild(tdLine);
      trLine2.appendChild(tdLine2);
    }

    const tFoot: HTMLElement = document.createElement("tfoot");
    const trLineFoot: HTMLTableRowElement = document.createElement("tr");
    const tdLineFoot: HTMLElement = document.createElement("td");
    tdLineFoot.setAttribute("colspan","2");
    tdLineFoot.textContent = "Nombre d'éléments : "+this.listContent.length;
    list.appendChild(tFoot);
    tFoot.appendChild(trLineFoot);
    trLineFoot.appendChild(tdLineFoot);

    return list;
  }

  
}