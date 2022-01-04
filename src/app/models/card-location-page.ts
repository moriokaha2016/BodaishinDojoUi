export class LocationPageCard {
  public icon: string = "";
  public title: string = "";
  public firstRow: string ="";
  public secondRow: string ="";

  constructor(icon: string, title: string, firstRow: string, secondRow: string) {
    this.icon = icon;
    this.title = title;
    this.firstRow = firstRow;
    this.secondRow = secondRow;
  }
}
