package model;

public class DailyEntry {

    private String date;
    private double grossWeight;
    private double netWeight;
    private double kgRate;
    private double amount;

    public DailyEntry() {
    }

    public DailyEntry(String date, double grossWeight, double netWeight, double kgRate) {
        this.date = date;
        this.grossWeight = grossWeight;
        this.netWeight = netWeight;
        this.kgRate = kgRate;
        this.amount = netWeight * kgRate;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getGrossWeight() {
        return grossWeight;
    }

    public void setGrossWeight(double grossWeight) {
        this.grossWeight = grossWeight;
    }

    public double getNetWeight() {
        return netWeight;
    }

    public void setNetWeight(double netWeight) {
        this.netWeight = netWeight;
    }

    public double getKgRate() {
        return kgRate;
    }

    public void setKgRate(double kgRate) {
        this.kgRate = kgRate;
    }

    public double getAmount() {
        return amount;
    }

    public void calculateAmount() {
        this.amount = netWeight * kgRate;
    }

    @Override
    public String toString() {
        return "Date: " + date +
                ", Gross Weight: " + grossWeight +
                ", Net Weight: " + netWeight +
                ", Kg Rate: " + kgRate +
                ", Amount: " + amount;
    }
}