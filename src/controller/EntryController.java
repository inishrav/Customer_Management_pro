package controller;

import model.DailyEntry;
import service.EntryService;
import util.FileHandler;

public class EntryController {

    private EntryService entryService = new EntryService();

    public void saveEntry(
            String date,
            double grossWeight,
            double netWeight,
            double kgRate) {

        DailyEntry entry = entryService.createEntry(
                date,
                grossWeight,
                netWeight,
                kgRate);

        FileHandler.saveEntry(entry.toString());

        System.out.println("Entry Saved Successfully");
    }
}