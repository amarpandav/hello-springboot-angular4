export class AppAttributesDto {
  constructor(public activeProfile:string, public componentVersion: string){}

  public static newInstance(){
    return new AppAttributesDto(null, null);
  }
}
