package service;

import model.DailyEntry;

public class EntryService {

    public DailyEntry createEntry(
            String date,
            double grossWeight,
            double netWeight,
            double kgRate) {

        DailyEntry entry = new DailyEntry(
                date,
                grossWeight,
                netWeight,
                kgRate);

        entry.calculateAmount();

        return entry;
    }
}