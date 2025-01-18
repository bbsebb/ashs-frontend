import { Pipe, PipeTransform } from '@angular/core';
import {DayOfWeek} from "../models/day-of-week";

@Pipe({
  name: 'dayOfWeekToFrench',
  standalone: true,
})
export class DayOfWeekPipe implements PipeTransform {

  // Fonction qui transforme les jours en noms français
  transform(dayOfWeek: DayOfWeek | string): string {
    const daysInFrench = {
      [DayOfWeek.MONDAY.toString()]: 'Lundi',
      [DayOfWeek.TUESDAY.toString()]: 'Mardi',
      [DayOfWeek.WEDNESDAY.toString()]: 'Mercredi',
      [DayOfWeek.THURSDAY.toString()]: 'Jeudi',
      [DayOfWeek.FRIDAY.toString()]: 'Vendredi',
      [DayOfWeek.SATURDAY.toString()]: 'Samedi',
      [DayOfWeek.SUNDAY.toString()]: 'Dimanche'
    };

    return daysInFrench[dayOfWeek] || 'Jour inconnu';  // Valeur par défaut si non trouvée
  }
}
